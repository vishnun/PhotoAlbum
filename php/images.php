<?php
$a=array();
if ($handle = opendir('../images')) {
    while (false !== ($file = readdir($handle))) {
       if(preg_match("/\.png$/", $file)) 
            $a[]=$file;
    else if(preg_match("/\.jpg$/", $file)) 
            $a[]=$file;
    else if(preg_match("/\.jpeg$/", $file)) 
            $a[]=$file;

    }
    closedir($handle);
}

foreach($a as $i){
    echo $i.";";
}
?>