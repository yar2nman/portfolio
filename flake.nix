{
  inputs = {
    # nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    systems.url = "github:nix-systems/default";
  };

  outputs =
    { systems, nixpkgs, ... }@inputs:
    let
      eachSystem = f: nixpkgs.lib.genAttrs (import systems) (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = eachSystem (pkgs: {
        default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs

            # You can set the major version of Node.js to a specific one instead
            # of the default version
            # pkgs.nodejs-22_x

            # Comment out one of these to use an alternative package manager.
            # pkgs.yarn
            # pkgs.pnpm
            # pkgs.bun

            pkgs.gnumake
            pkgs.firebase-tools
            pkgs.google-cloud-sdk

            pkgs.nodePackages.typescript
            pkgs.nodePackages.typescript-language-server
          ];

          GREETING = "Hello Ahmed, This is Nix!";

          shellHook = ''
            echo $GREETING
            export PS1='\[\e[0;32m\]Nix:\w> \[\e[0;34m\]'
          '';

        };
      });
    };
}