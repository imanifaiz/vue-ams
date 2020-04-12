<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hht extends Model
{
  protected $table = 'hht';

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
    return $this->belongsToMany(Pma::class, 'hht_prev_pma', 'hht_id');
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
