import { GameData } from "../GameData";
export default class BossLead extends Phaser.Scene {
  private _TU: Phaser.GameObjects.Image;
  private _FabIcon: Phaser.GameObjects.Image;
  private _MalemiaIcon: Phaser.GameObjects.Image;
  private _AbissManIcon: Phaser.GameObjects.Image;

  private _sfondoNero: Phaser.GameObjects.Image;

  //parametri fondamentali
  private _x_TU: number;
  private _livello: string;

  constructor() {
    super({
      key: "BossLead",
    });

  }

  create() {

    this._x_TU = this.registry.get("fase");
    this._livello = this.registry.get("level");
    this._sfondoNero = this.add.image(0, 0, "sfondoNero").setOrigin(0, 0).setAlpha(1).setDepth(1002);

    this.cameras.main.setBackgroundColor("#ffffff");
    this._FabIcon = this.add.image(200, this.game.canvas.height / 2-100, "FabIcon").setOrigin(0.5).setScale(5);
    this._MalemiaIcon = this.add.image(600, this.game.canvas.height / 2-100, "MalemiaIcon").setOrigin(0.5).setScale(5);
    this._AbissManIcon = this.add.image(1000, this.game.canvas.height / 2-100, "AbissManIcon").setOrigin(0.5).setScale(5);
    this._TU = this.add.image(0, this.game.canvas.height / 2+100, "TU").setOrigin(0.5).setScale(2.5);

    this.tweens.add({
      targets: this._sfondoNero,
      alpha: 0,
      duration: 1000,
      ease: "Power2",
      onComplete: () => {
        this.tweens.add({
          targets: this._TU,
          x: this._x_TU,
          duration: 1000,
          ease: "Power2",
          onComplete: () => {
            this.tweens.add({
              targets: this._sfondoNero,
              alpha: 1,
              duration: 1000,
              ease: "Power2",
              onComplete: () => {
                this.scene.start(this._livello);
                this.scene.stop("BossLead");  
              },
            });
          },
        });
      },
    });
  }

  update(time: number, delta: number): void {

  }



}
