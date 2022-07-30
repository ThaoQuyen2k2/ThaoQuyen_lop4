let newArray=['Trần Thị Thảo 25/10','Nguyễn Thị Thảo Quyên','Trần Thị Thảo 10/3', 'Phạm Thị Hồng Phượng']
var hienThi= document.createElement('div')
hienThi.className="thongbao"
ranbot=document.getElementsByClassName('ranbot')[0]
ranbot.addEventListener('click', (e) => {
    if(e.target.classList.contains('ranbot1')){
        let numRan= Math.round(Math.random()*3)
        let ketQua= newArray[numRan]
        hienThi.innerText=ketQua;
        let nhet=document.getElementsByClassName('la')[0];
        nhet.appendChild(hienThi)
    }
})
