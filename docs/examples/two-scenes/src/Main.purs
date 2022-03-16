module Main where

import Prelude

import Effect (Effect)
import Effect.Class.Console (log)
import Graphics.Phaser as Phaser
import Graphics.Phaser.Events (createEventListener0, on)
import Graphics.Phaser.ForeignTypes (PhaserImage, PhaserScene)
import Graphics.Phaser.GameObject (setAngle, setDisplaySize, setInteractive, setPosition)
import Graphics.Phaser.Image as Image
import Graphics.Phaser.Loader (loadImage)
import Graphics.Phaser.Scene (launch)
import Graphics.Phaser.SceneManager (Start(..), addScene)
import Graphics.Phaser.Text as Text

main :: Effect Unit
main = do
  game <- Phaser.create { width: 400.0, height: 400.0 }
  void $ addScene "main" mainScene Start game
  void $ addScene "snd" secondScene NoStart game

mainScene ::
  { create :: PhaserScene -> Effect Unit
  , preload :: PhaserScene -> Effect Unit
  }
mainScene =
  { create:
      \scene -> do
        _ <- Text.create "Click the logo to create a new scene" scene
        startButton scene
  , preload:
      \scene -> void do
        loadImage { key: "logo", path: logoPath } scene
  }
  where
  startButton :: PhaserScene -> Effect Unit
  startButton scene =
    void do
      Image.create "logo" scene
        >>= setPosition { x: 100.0, y: 100.0 }
        >>= setDisplaySize { width: 50.0, height: 50.0 }
        >>= setInteractive
        >>= on "pointerdown" listener
    where
    callback :: Effect Unit
    callback =
      void do
        log "clicked!"
        -- Don't do anything with the image, just launch a new scene.
        launch "snd" {} scene
    listener = createEventListener0 callback

logoPath :: String
logoPath = "https://upload.wikimedia.org/wikipedia/commons/6/64/PureScript_Logo.png"

secondScene ::
  { create :: PhaserScene -> Effect Unit
  , preload :: PhaserScene -> Effect Unit
  }
secondScene =
  { create:
      \scene -> void do createLogo scene
  , preload:
      \scene -> void do
        loadImage  { key: "logo", path: logoPath } scene
  }
  where
  createLogo :: PhaserScene -> Effect PhaserImage
  createLogo =
    Image.create "logo"
      >=> setPosition { x: 200.0, y: 200.0 }
      >=> setAngle 30.0
      >=> setDisplaySize { width: 50.0, height: 50.0 }
