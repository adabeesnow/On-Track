<?php
/**
 * Created by PhpStorm.
 * User: tanner
 * Date: 2/8/2017
 * Time: 10:17 AM
 */


$url = 'https://taxmap.ntis.gov/taxmap/instr/i1040gi-015.htm';

$url = $_GET['url'];

$output = file_get_contents($url);

$dom = new DOMDocument;
$dom->loadHTML($output);
$tables = $dom->getElementsByTagName('tbody');

$types = [
    'min',
    'max',
    'single_no_children',
    'single_one_child',
    'single_two_children',
    'single_three_children',
    'married_no_children',
    'married_one_child',
    'married_two_children',
    'married_three_children'
];

foreach ($tables as $table) {

    if ($table->childNodes->length > 100) {
        $count = 5;
        foreach ($table->childNodes as $node) {
            $index = 0;
            $current_min = str_replace("$", "", $node->childNodes[0]->textContent);
            foreach ($node->childNodes as $cell) {
                if ($index != 0 and $index != 1) {
                    $count++;
                    $entry_name = $types[$index] . '_' . $current_min;
                    echo $types[$index];
                    echo '_';
                    echo $current_min;
                    echo ' - ';
                    echo $index + 5;
                    echo ' - ';
                    echo str_replace("$", "", $cell->textContent);
                    echo '<br/>';

                    $icarus = 'https://icarus.cs.weber.edu/~tg46219/cottages/api/v1/entry/';

                    $json_data = json_encode(array(
                        "entryId"=>$count,
                        "entryName"=>$entry_name,
                        "entryValue"=>str_replace("$", "", $cell->textContent),
                        "categoryId"=>$index + 5
                    ));

                    $curl = curl_init($icarus);
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
                    curl_setopt($curl, CURLOPT_POSTFIELDS, $json_data);


                    $json_response = curl_exec($curl);

                }
                $index++;
            }
            echo '<br/>';
        }
        echo '<br/>';
    }
}