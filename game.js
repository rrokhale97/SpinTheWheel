 let prizes_config = {
 	count:12,
 	prize_names:["3000 Credits","35% Off","Hard Luck","70% Off","SwagPack","100% Off",
 	"Netflix Subs.","50% Off","Amazon Voucher","2 Extra Spin", "CB-Tshirt","CB-Book"],
 }

let config = {
	type:Phaser.CANVAS,
	width:1350,
	height:640,
	backgroundColor:0xffcc00,
	scene:{
     preload:preload,
     create:create,
	}
};

let game = new Phaser.Game(config);

function preload(){

	this.load.image('background','https://raw.githubusercontent.com/UMANG-GAKHAR/Spin-And-Win-Game/master/Assets/back.jpg');
   this.load.image('wheel','https://raw.githubusercontent.com/UMANG-GAKHAR/Spin-And-Win-Game/master/Assets/wheel.png');
   this.load.image('pin','https://raw.githubusercontent.com/UMANG-GAKHAR/Spin-And-Win-Game/master/Assets/pin.png');
   this.load.image('stand','https://raw.githubusercontent.com/UMANG-GAKHAR/Spin-And-Win-Game/master/Assets/stand.png');
   this.load.image('spinwin','https://raw.githubusercontent.com/kiiirtiiii/SpinTheWheel/master/Assets/spin-n-win-logo.png')
   this.load.image('start','https://raw.githubusercontent.com/kiiirtiiii/SpinTheWheel/master/Assets/button.png');
   this.load.image('restart','https://raw.githubusercontent.com/UMANG-GAKHAR/Spin-And-Win-Game/master/Assets/restart.png');
   this.load.audio('sound','https://raw.githubusercontent.com/prateeksawhney97/Spin-And-Win-Game-JavaScript/master/Assets/sound.mp3?token=AIEJHUQ3OVWNLZO3BAZOFFK65CBTI');
   this.load.audio('drum','https://raw.githubusercontent.com/prateeksawhney97/Spin-And-Win-Game-JavaScript/master/Assets/drum.mp3?token=AIEJHUWNNKXYQMDHCQ6MOES65CBYE');
}

function create(){

	  let W=game.config.width;
	  let H=game.config.height;
	  let background = this.add.sprite(0,0,'background');
	  background.setPosition(W/2,H/2);
	  background.setScale(0.30);


     let stand = this.add.sprite(W/2,H-100,'stand');
	  stand.setScale(0.25);

	  this.wheel = this.add.sprite(W/2,H/2,'wheel');
	  this.wheel.setScale(0.20);

	  this.start = this.add.sprite(W/2,H/2, 'start').setScale(.10).setInteractive({cursor:'pointer'});

     this.spinwin = this.add.sprite(240,70, 'spinwin').setScale(.30)

	  let pin = this.add.sprite(W/2,H/2-200,'pin');
	  pin.setScale(0.25);

	  this.soundd=this.sound.add('sound');
	  this.drum=this.sound.add('drum');

	  // eventlistner for mouse click
	  // this.input.on("pointerdown",spinwheel,this);

	  this.start.on('pointerdown', spinwheel,this);  

	  // let create text object

	  font_style = {
	  	font : "bold 50px Sttatliches",
	  	align : "center",
	  	color : "yellow",
	  }

	  font_style1 = {
	  	font : "bold 30px Arial",
	  	align : "center",
	  	color : "red",
	  }
}
     

   function spinwheel(){
     //this.game_text.setText("You clicked the mouse!");
     this.sound.play('sound');
     this.start.visible=false;
    
     let prizes_config = {
 	  count:12,
 	  prize_names:["3000 Credits","35% Off","Hard Luck","70% Off","SwagPack","100% Off",
 	  "Netflix Subs.","50% Off","Amazon Voucher","2 Extra Spin", "CB-Tshirt","CB-Book"],
     }
     let rounds = Phaser.Math.Between(2,5);
     let degrees = Phaser.Math.Between(0,11)*30;
     let total_angle = rounds*360 + degrees;
     let idx = prizes_config.count - 1 - Math.floor(degrees/(360/prizes_config.count));


     tween = this.tweens.add({
        targets : this.wheel,
        angle : total_angle,
        ease : "Cubic.easeOut",
        duration: 6000,
        callbackScope:this,
        onComplete:function(){
        	this.sound.play('drum');
        	this.luck = prizes_config.prize_names[idx] === "Hard Luck" ? " Sorry!" :" Hurrah!";
        	this.game_text = this.add.text(400,579,"You got " +
        	 prizes_config.prize_names[idx] + this.luck ,font_style);
        	this.restart = this.add.text(950,20,"Click anywhere to restart",font_style1);
        	this.input.on("pointerdown",restart,this);
        },
     });
    }
    function restart(){
   this.scene.restart();
    
}