<?php

namespace App\Http\Controllers;

use App\Repair;
use App\Hhp;
use App\Hht;
use Illuminate\Http\Request;
use Carbon\Carbon;

class RepairController extends Controller
{
  public function index()
  {
    $data = Repair::with(['repairable', 'pma.district'])
      ->orderBy('reported_at')
      ->paginate(15);

    // $data = Repair::join('devices', 'devices.id', 'repairs.device_id')
    //               ->join('pma', 'pma.id', 'repairs.pma_id')
    //               ->select(\DB::raw('repairs.id as id, repairs.reported_at, repairs.repaired_at, repairs.returned_at, repairs.reason, repairs.remarks, repairs.status, pma.name as pma_name, devices.serial_no as device_serial_no, devices.type as device_type'))
    //               ->orderBy('reported_at')
    //               ->paginate(15);

    return response()->json($data);
  }

  public function show($id)
  {
    $data = Repair::with(['repairable', 'pma.district'])->findOrFail($id);

    return response()->json(['data' => [
      'id'          => $data->id,
      'device_type' => strtoupper(str_replace('App\\', '', $data->repairable_type)),
      'serial_no'   => $data->repairable->serial_no,
      'pma_name'    => $data->pma->name,
      'pma_id'      => $data->pma->pma_id,
      'pma_code'    => $data->pma->pma_code,
      'status'      => $data->status,
      'reported_at' => $data->reported_at,
      'repaired_at' => $data->repaired_at,
      'returned_at' => $data->returned_at,
      'reason'      => $data->reason,
      'remarks'     => $data->remarks
    ]]);

    return response()->json(['data' => $data]);
  }

  public function create()
  {
    return response()->json([
      'device_id'   => '',
      'device_type' => '',
      'device'      => '',
      'pma'         => '',
      'pma_id'      => '',
      'pma_code'    => '',
      'status'      => '',
      'reported_at' => Carbon::now()->format('Y-m-d'),
      'repaired_at' => '',
      'returned_at' => '',
      'reason'      => '',
      'remarks'     => ''
    ]);
  }

  public function store(Request $request)
  {
    $this->validate($request, Repair::rules());

    $data = [
      'pma_id'      => $request->pma['value'],
      'status'      => $request->status,
      'reported_at' => $request->reported_at,
      'repaired_at' => $request->repaired_at,
      'returned_at' => $request->returned_at,
      'reason'      => $request->reason,
      'remarks'     => $request->remarks
    ];

    $device = $request->device_type == 'HHT' ? 
                Hht::findOrFail($request->device['value']) :
                Hhp::findOrFail($request->device['value']);

    $data = $device->repairs()->create($data);
    
    return response()->json($data);
  }

  public function edit($id)
  {
    $data = Repair::findOrFail($id);

    return response()->json([
      'device_id'   => $data->device_id,
      'device_type' => strtoupper(str_replace('App\\', '', $data->repairable_type)),
      'device'      => ['value' => $data->repairable->id, 'label' => $data->repairable->serial_no],
      'pma'         => ['value' => $data->pma->id,        
                        'label' => $data->pma->name,
                        'pma_code' => $data->pma->pma_code,
                        'pma_id' => $data->pma->pma_id],
      'pma_id'      => $data->pma->pma_id,
      'pma_code'    => $data->pma->pma_code,
      'status'      => $data->status,
      'reported_at' => $data->reported_at,
      'repaired_at' => $data->repaired_at,
      'returned_at' => $data->returned_at,
      'reason'      => $data->reason,
      'remarks'     => $data->remarks
    ]);
  }

  public function update(Request $request, $id)
  {
    $this->validate($request, Repair::rules());

    $model = Repair::findOrFail($id);

    $data = [
      'device_id'   => $request->device['value'],
      'pma_id'      => $request->pma['value'],
      'status'      => $request->status,
      'reported_at' => $request->reported_at,
      'repaired_at' => $request->repaired_at,
      'returned_at' => $request->returned_at,
      'reason'      => $request->reason,
      'remarks'     => $request->remarks
    ];

    $model->update($data);

    return response()->json(['message' => 'Data updated succesfully!']);
  }

  public function destroy($id)
  {
    $data = Repair::findOrFail($id);
    // $data->delete();
    return response()->json(['message' => 'Data deleted succesfully!']);
  }
}
