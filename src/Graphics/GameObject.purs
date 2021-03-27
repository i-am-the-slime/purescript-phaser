module Graphics.Phaser.GameObject where

import Prelude

import Data.Function.Uncurried (Fn2)
import Effect (Effect)

type Vector
  = { x :: Number, y :: Number }

type Dimensions
  = { width :: Number, height :: Number }

type OnClickCallback
  = Vector -> Vector -> Event -> Effect Unit

foreign import data Event :: Type

-- TODO: missing functions - flipx/y, depth, scrollfactor, bounds, settintfill, multi tint, blend mode
class GameObject a where
  destroy :: a -> Effect Unit
  getPosition :: a -> Effect Vector
  setPosition :: a -> Vector -> Effect Unit
  getAngle :: a -> Effect Number
  setAngle :: a -> Number -> Effect Unit
  getRadians :: a -> Effect Number
  setRadians :: a -> Number -> Effect Unit
  getVisible :: a -> Effect Boolean
  setVisible :: a -> Boolean -> Effect Unit
  getAlpha :: a -> Effect Number
  setAlpha :: a -> Number -> Effect Unit
  getOrigin :: a -> Effect Vector
  setOrigin :: a -> Vector -> Effect Unit
  setTint :: a -> String -> Effect Unit
  clearTint :: a -> Effect Unit
  getSize :: a -> Effect Dimensions
  setSize :: a -> Dimensions -> Effect Unit
  getDisplaySize :: a -> Effect Dimensions
  setDisplaySize :: a -> Dimensions -> Effect Unit
  getScale :: a -> Effect Vector
  setScale :: a -> Vector -> Effect Unit
  setName :: a -> String -> Effect Unit
  getName :: a -> Effect String
  onClick :: a -> OnClickCallback -> Effect Unit


foreign import destroyImpl :: forall a. a -> Effect Unit

foreign import getPositionImpl :: forall a. a -> Effect Vector

foreign import setPositionImpl :: forall a. Fn2 a Vector (Effect Unit)

foreign import getAngleImpl :: forall a. a -> Effect Number

foreign import setAngleImpl :: forall a. Fn2 a Number (Effect Unit)

foreign import getRadiansImpl :: forall a. a -> Effect Number

foreign import setRadiansImpl :: forall a. Fn2 a Number (Effect Unit)

foreign import getVisibleImpl :: forall a. a -> Effect Boolean

foreign import setVisibleImpl :: forall a. Fn2 a Boolean (Effect Unit)

foreign import getAlphaImpl :: forall a. a -> Effect Number

foreign import setAlphaImpl :: forall a. Fn2 a Number (Effect Unit)

foreign import getOriginImpl :: forall a. a -> Effect Vector

foreign import setOriginImpl :: forall a. Fn2 a Vector (Effect Unit)

foreign import setTintImpl :: forall a. Fn2 a String (Effect Unit)

foreign import clearTintImpl :: forall a. a -> Effect Unit

foreign import getSizeImpl :: forall a. a -> Effect Dimensions

foreign import setSizeImpl :: forall a. Fn2 a Dimensions (Effect Unit)

foreign import getDisplaySizeImpl :: forall a. a -> Effect Dimensions

foreign import setDisplaySizeImpl :: forall a. Fn2 a Dimensions (Effect Unit)

foreign import getScaleImpl :: forall a. a -> Effect Vector

foreign import setScaleImpl :: forall a. Fn2 a Vector (Effect Unit)

foreign import getNameImpl :: forall a. a -> Effect String

foreign import setNameImpl :: forall a. Fn2 a String (Effect Unit)

foreign import onClickImpl :: forall a. Fn2 a OnClickCallback (Effect Unit)
