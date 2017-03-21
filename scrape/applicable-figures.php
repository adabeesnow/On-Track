<?php
/**
 * Created by PhpStorm.
 * User: tanner
 * Date: 2/8/2017
 * Time: 10:17 AM
 */


$url = 'https://www.irs.gov/instructions/i8962/ch02.html';

//$url = $_GET['url'];

$output = file_get_contents($url);

$dom = new DOMDocument;
@$dom->loadHTML($output);
$tables = $dom->getElementsByTagName('table');

$values = [];
$the_table = $tables[6];
foreach ($the_table->childNodes as $parentNode) {
    foreach ($parentNode->childNodes as $key => $row) {
        // This is the row
        if ($key > 1) {
            $row_values = $row->childNodes;
            if($row_values->length > 1){
                if (!ctype_space(@$row_values[2]->textContent)) {
                    $values['a_f_' . @$row_values[2]->textContent] = @$row_values[4]->textContent;
                }
                if (!ctype_space(@$row_values[8]->textContent)) {
                    $values['a_f_' . @$row_values[8]->textContent] = @$row_values[10]->textContent;
                }
                if (!ctype_space(@$row_values[14]->textContent)) {
                    $values['a_f_' . @$row_values[14]->textContent] = @$row_values[16]->textContent;
                }
                if (!ctype_space(@$row_values[20]->textContent)) {
                    $values['a_f_' . @$row_values[20]->textContent] = @$row_values[22]->textContent;
                }
            }
        }
    }
}
natsort($values);
foreach($values as $key=>$value){
    if (strlen($key) > 6){
        print($key . ' - ' . $value . '</br>');
        $icarus = 'http://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/';
        $json_data = json_encode(array(
            "entryName"=>$key,
            "entryValue"=>str_replace(' ', '', $value),
            "categoryId"=>15

        ));

        $curl = curl_init($icarus);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);

        $json_response = curl_exec($curl);
        print($json_response);
    }
}
//foreach ($tables as $table) {
//
//    if ($table->childNodes->length > 100) {
//        $count = 5;
//        foreach ($table->childNodes as $node) {
//            $index = 0;
//            $current_min = str_replace("$", "", $node->childNodes[0]->textContent);
//            foreach ($node->childNodes as $cell) {
//                if ($index != 0 and $index != 1) {
//                    $count++;
//                    $entry_name = $types[$index] . '_' . $current_min;
//                    echo $types[$index];
//                    echo '_';
//                    echo $current_min;
//                    echo ' - ';
//                    echo $index + 5;
//                    echo ' - ';
//                    echo str_replace("$", "", $cell->textContent);
//                    echo '<br/>';
//
//                    $icarus = 'http://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/';
//
//                    $json_data = json_encode(array(
//                        "entryId"=>$count,
//                        "entryName"=>$entry_name,
//                        "entryValue"=>str_replace("$", "", $cell->textContent),
//                        "categoryId"=>$index + 5
//                    ));
//
//                    $curl = curl_init($icarus);
//                    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//                    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
//                    curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);
//
//
//                    $json_response = curl_exec($curl);
//
//                }
//                $index++;
//            }
//            echo '<br/>';
//        }
//        echo '<br/>';
//    }
//}