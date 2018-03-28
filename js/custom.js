$(document).ready(function(){

});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

 function service() {
   $.ajax({
			type:"POST",
			url:"./api/main.php",
			data:{
				action: '',
			},
			success :function(data){
			}
	 });
 }
