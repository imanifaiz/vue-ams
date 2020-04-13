<?php

namespace App\Http\Controllers;

use App\Hht;
use Illuminate\Http\Request;

class HhtController extends Controller
{
  public function index()
  {
    $data = Hht::with(['pma.district', 'pma.hhp'])->orderBy('serial_no')->paginate(15);
    return response()->json($data);
  }

  public function show($id)
  {
    $data = Hht::with(['histories.district', 'repairs.pma.district', 'pma.district', 'pma.hhp'])->findOrFail($id);

    return response()->json(['data' => $data]);
  }

  public function create()
  {
    $data = [
      'serial_no' => '',
      'status'    => '',
      'pma'       => null,
      'pma_code'  => '',
      'district'  => ''
    ];

    return response()->json($data);
  }

  public function store(Request $request)
  {
    $this->validate($request, Hht::rules());

    $data = [
      'serial_no' => $request->serial_no,
      'status'    => $request->status,
      'pma_id'    => $request->pma ? $request->pma['value'] : null,
    ];

    $data = Hht::create($data);

    return response()->json($data);
  }

  public function edit($id)
  {
    $data = Hht::with(['pma.district'])->findOrFail($id);

    $data = [
      'serial_no' => $data->serial_no,
      'status'    => $data->status,
      'pma'       => $data->pma ? ['value' => $data->pma_id, 'label' => $data->pma->name] : '',
      'pma_code'  => $data->pma ? $data->pma->pma_code       : '',
      'district'  => $data->pma ? $data->pma->district->name : ''
    ];

    return response()->json($data);
  }

  public function update(Request $request, $id)
  {
    $this->validate($request, Hht::rules());

    $data = [
      'serial_no' => $request->serial_no,
      'status'    => $request->status,
      'pma_id'    => $request->pma ? $request->pma['value'] : null,
    ];

    $model = Hht::findOrFail($id)->update($data);

    return response()->json(['message' => 'Data updated succesfully!']);
  }

  public function destroy($id)
  {
    $data = Hht::findOrFail($id);
    $data->delete();

    return response()->json(['message' => 'Data deleted succesfully!']);
  }
}
