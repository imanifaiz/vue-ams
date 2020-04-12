<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
  protected $table = 'districts';

  protected $fillable = ['name'];

  public function pma()
  {
    return $this->hasMany(Pma::class, 'district_id', 'id');
  }

  public static function selectOpts()
  {
    return (new static)::orderBy('name')->select(\DB::raw('id as value, name as label'))->get();
  }

  public static function rules($rules =[])
  {
    return array_merge([
      'name' => 'required',
    ], $rules);
  }
}
