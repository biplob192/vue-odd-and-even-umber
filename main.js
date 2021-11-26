firstapp = Vue.createApp({
  	data(){
  		return{
			count: 1,
			count2: 2,
  		}
  	},
	methods:{
		increase(){
			this.count = this.count+2;
		},
		decrease(){
			this.count = this.count - 2;
		},
		increase2(){
			this.count2 = this.count2+2;
		},
		decrease2(){
			this.count2 = this.count2 - 2;
		},
		reset(){
			this.count = 1;
		},
		reset2(){
			this.count2 = 2;
		}
	}
});

firstapp.mount('#app');
