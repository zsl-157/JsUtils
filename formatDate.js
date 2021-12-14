function formatDate(value){
				var index = 0;
				var underLineIndex = 0;
				while(index<value.length){
				  if(value[index] == '-'){
				    underLineIndex ++;
				    if(underLineIndex == 1){
				      value = value.replace(value[index],"年")}
				    if(underLineIndex == 2){
				      value = value.replace(value[index],"月")}
				  }
				  index ++;
				}
				value += "日";
				return value;
			}
console.log(formatDate("2021-12-25"))