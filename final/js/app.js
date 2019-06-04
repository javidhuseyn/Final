let dropWrapper=document.querySelector('.dropWrapper');

dropWrapper.addEventListener('dragover',function(e){
    e.preventDefault();
    dropWrapper.classList.add('active')
})
dropWrapper.addEventListener('dragleave',function(){
    dropWrapper.classList.remove('active');
})
dropWrapper.addEventListener('drop',function(e){
    e.preventDefault();
    dropWrapper.classList.remove('active');
    FillTable(e.dataTransfer.files);
})

function FillTable(images){
    for(const file of images){
        if(file.type.match("image*")){
            const tr=document.createElement('tr');
            const reader=new FileReader();
            reader.onload=function(readerEvent){
                let imageTd=document.createElement('td');
                const img=document.createElement('img');
                img.src=readerEvent.target.result;
                img.width=200;
                img.height200;
                imageTd.appendChild(img);
                tr.insertBefore(imageTd,tr.firstChild);
            }
            reader.readAsDataURL(file);
            document.querySelector('#mainTable tbody').appendChild(tr)
            document.querySelector('#mainTable').classList.remove('d-none');
        }
    }
}