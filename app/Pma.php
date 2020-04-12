<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pma extends Model
{
  protected $table = 'pma';

  protected $fillable = ['name', 'pma_id', 'pma_code', 'district_id', 'remarks'];

  public function district()
  {
    return $this->belongsTo(District::class, 'district_id', 'id');
  }

  public function hht()
  {
    return $this->hasOne(Hht::class, 'pma_id', 'id');
  }

  public function hhp()
  {
    return $this->hasOne(Hhp::class, 'pma_id', 'id');
  }

  public function repairs()
  {
    return $this->hasMany(Repair::class, 'pma_id', 'id');
  }

  public static function selectOpts($details = false)
  {
    if ($details) {
      return (new static)::orderBy('name')->select(\DB::raw('id as value, name as label, pma_code, pma_id'))->get(); 
    }

    return (new static)::orderBy('name')->select(\DB::raw('id as value, name as label'))->get(); 
  }

  public static function rules($rules = [])
  {
    return array_merge([
      'name'     => 'required',
      'district' => 'required',
    ], $rules);
  }
}
