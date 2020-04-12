<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hhp extends Model
{
  protected $table = 'hhp';

  protected $fillable = ['serial_no', 'type', 'status', 'pma_id'];

  public function repairs()
  {
    return $this->morphMany(Repair::class, 'repairable');
  }

  public function pma()
  {
    return $this->belongsTo(Pma::class, 'pma_id', 'id');
  }

  public function prevPma()
  {
    return $this->belongsToMany(Pma::class, 'hhp_prev_pma', 'hhp_id');
  }

  public static function selectOpts()
  {
    return (new static)::orderBy('serial_no')
      ->select(\DB::raw('id as value, serial_no as label'))
      ->get();
  }

  public static function rules($rules = [])
  {
    return array_merge([
      'serial_no'   => 'required',
      'status'      => 'required',
    ], $rules);
  }
}
