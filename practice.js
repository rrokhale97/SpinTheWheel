let video={
  title:'a',
  tags:['a','b','c'],
  showTags(){            // 1st approch place the value of this in a variable const self=this;
    this.tags.forEach(function(tag){     // Anonymus function or callback function
      console.log(this.title,tag)        //so this will be undefined here
    });   // to solve this problem 2nd approch is pass *this* as a 2nd argument in forEach method 
  }       
};
video.showTags();


                          //------Regular Function-------//

// function playVideo(){
//   console.log(this);
// }
// playVideo();


                           //------Constructor Function-------//

// function Video(title){
//   this.title=title,
//     console.log(this);
// }
// let v= new Video('a');
