<?php
/**
 * Created by PhpStorm.
 * User: tanner
 * Date: 2/8/2017
 * Time: 10:17 AM
 */


$url = 'https://taxmap.ntis.gov/taxmap/instr/i1040gi-015.htm';
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

    if($table->childNodes->length > 100){
        foreach ($table->childNodes as $node) {
            $index = 0;
            $current_min = $node->childNodes[0]->textContent;
            foreach ($node->childNodes as $cell) {
                if($index != 0 and $index != 1){
                    echo $types[$index];
                    echo '_';
                    echo $current_min;
                    echo ' - ';
                    echo $cell->textContent;
                    echo '<br/>';
                }
                $index++;
            }
            echo '<br/>';
        }
        echo '<br/>';
    }
}