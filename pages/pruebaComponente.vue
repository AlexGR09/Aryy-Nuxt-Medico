<template>
  <div id="paper">
  <div id="pattern">
    <div id="content">
    
      Dear Diary
      <br/><br/>Here are some of the sweetest memories I made during the last summer trip to Canada. What's even more beautiful about it was that it was the first time the entire family got together to spend quality time with each other. 
    </div>
  </div>
</div>
</template>
<style scoped>


/* styling paper */
#paper {
  width: 600px;
  height: 400px;
  position: relative;
  margin: 20px auto;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
  box-shadow: 0px 0px 5px 0px #888;
}

/* styling red vertical line */


/* styling blue horizontal lines */
#pattern {
  height: 100%;
  background-image: repeating-linear-gradient(white 0px, white 24px, teal 25px);
}

/* styling text content */
#content {
  padding-top: 6px;
  padding-left: 56px;
  padding-right: 16px;
  line-height: 25px;
  font-family: 'Montserrat';
  font-size: 19px;
  letter-spacing: 1px;
  word-spacing: 5px;
}
</style>