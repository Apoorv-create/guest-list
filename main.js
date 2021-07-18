// console.log("QWERTY")
// var day="this day is very good";
// console.log(day)
// var night=" there are beautiful stars";
// var sun=day.concat(night);
// console.log(sun.length);
// sun=sun.replace("beautiful","bright")
// console.log(sun.toUpperCase())
// var num=35;
// console.log(Math.sqrt(num))
// console.log(Math.max(2,3,4,3))
// console.log(Math.min(29,35,23,21))
// console.log(Math.pow(8,2))

name_of_students_array=[];
function submit()
{
    var display_student_array=[];

     for(var j=1; j<=4; j++)
     {
       var name_of_student= document.getElementById("name_of_the_student_"+ j).value;
       console.log(name_of_student);
       name_of_students_array.push(name_of_student);
     }
     console.log(name_of_students_array);
     var length_of_name_of_student_array= name_of_students_array.length;
     console.log(length_of_name_of_student_array);
     for(var k=0; k<length_of_name_of_student_array; k++)
     {
      display_student_array.push("<h4> NAME-" + name_of_students_array + "</h4>");
      console.log(display_student_array);
     }
     console.log(display_student_array);
     document.getElementById("display_name_with_commas").innerHTML= display_student_array;
    //  without commas
     var student_name_withno_commas = display_student_array.join(" ");
     console.log(student_name_withno_commas);
     document.getElementById("display_name_without_commas").innerHTML= student_name_withno_commas;

     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort_button").style.display= "inline-block";
    }

    function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting = [];

    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);
    for (var k = 0; k < lenght_of_name_of_students_array; k++)
    {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}