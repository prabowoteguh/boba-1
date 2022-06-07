<?php

    $var = Date();

    $date = Date(strtotime($from), 'Y-m-d');

    $data = DB::table('bill.tx_bill')
            ->whereBetween('process_date', [Date(strtotime($from), 'Y-m-d'), Date(strtotime($to), 'Y-m-d')])
            ->get();

?>