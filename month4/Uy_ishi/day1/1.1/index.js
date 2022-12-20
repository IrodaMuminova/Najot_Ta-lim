let same=(student1Courses,student2Courses)=>{
    for(const subject of student1Courses){
        for(const subject2 of student2Courses){
            if(subject==subject2){
               console.log(subject2)
            }
        }
    }
}
let student1Courses=['Math','English','Programming'];
let student2Courses=['Geography','Spanish','Programming'];
same(student1Courses,student2Courses);
