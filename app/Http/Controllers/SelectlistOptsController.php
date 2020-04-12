<?php

namespace App\Http\Controllers;

use App\Hhp;
use App\Hht;
use App\District;
use App\History;
use App\Pma;

class SelectlistOptsController extends Controller
{
  public function getDistricts()
  {
    return District::selectOpts();
  }

  public function getHht()
  {
    return Hht::selectOpts();
  }

  public function getHhp()
  {
    return Hhp::selectOpts();
  }

  public function getPma()
  {
    return Pma::selectOpts();
  }

  public function getPmaDetails()
  {
    return Pma::selectOpts(true);
  }
}
