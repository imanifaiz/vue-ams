<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Repair extends Model
{
  protected $table = 'repairs';

  protected $fillable = ['pma_id', 'status', 'reported_at', 'repaired_at', 'returned_at', 'reason', 'remarks', 'repairable_id', 'repairable_type'];

  public function repairable()
  {
    return $this->morphTo();
  }

  public function pma()
  {
    return $this->belongsTo(Pma::class, 'pma_id', 'id');
  }

  public static function rules($rules = [])
  {
    return array_merge([
      'device'      => 'required',
      'pma'         => 'required',
      'status'      => 'required',
      'reported_at' => 'required',
      'reason'      => 'required',
    ], $rules);
  }
}
