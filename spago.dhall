{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "phaser"
, dependencies = [ "aff", "effect", "option", "prelude", "psci-support" ]
, license = "MIT"
, repository = "https://github.com/lfarroco/purescript-phaser"
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}
