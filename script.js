let lists = document.getElementsByClassName('list');
let leftBox = document.getElementsByClassName('.left');
let rightBox = document.getElementsByClassName('.right');
let selected;


console.log(lists);


for (let list of lists) {
    list.addEventListener('dragstart',function(e){
        selected = e.target;
        rightBox.addEventListener('dragover',function(e){
            e.preventDefault();
        });

        rightBox.addEventListener('drop',function(){
            rightBox.appendChild(selected);
            selected = null;
        });
        selected = e.target;
        leftBox.addEventListener('dragover',function(e){
            e.preventDefault();
        });

        leftBox.addEventListener('drop',function(){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}
    
