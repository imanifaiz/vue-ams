<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HhpPrevPma extends Model
{
  protected $table = 'hhp_prev_pma';

  protected $fillable = ['pma_id', 'hhp_id'];

  public function pma()
  {
    return $this->belongsToMany(Pma::class, 'pma_id', 'id');
  }

  public function hht()
  {
    return $this->belongsToMany(Hhp::class, 'hhp_id', 'id');
  }

  public static function rules($rules = [])
  {
    return array_merge([
      'device_id'   => 'required',
      'pma_id'      => 'required',
    ], $rules);
  }
}
