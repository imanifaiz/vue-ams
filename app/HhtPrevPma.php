<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HhtPrevPma extends Model
{
  protected $table = 'hht_prev_pma';

  protected $fillable = ['pma_id', 'hht_id'];

  public function pma()
  {
    return $this->belongsToMany(Pma::class, 'pma_id', 'id');
  }

  public function hht()
  {
    return $this->belongsToMany(Hht::class, 'hht_id', 'id');
  }

  public static function rules($rules = [])
  {
    return array_merge([
      'device_id'   => 'required',
      'pma_id'      => 'required',
    ], $rules);
  }
}
