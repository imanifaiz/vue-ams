<?php

namespace App\Http\Controllers;

use App\Pma;
use Illuminate\Http\Request;

class PmaController extends Controller
{
  public function index(Request $request)
  {
    $data = Pma::with(['hht.repairs', 'hhp.repairs', 'district', 'repairs'])
      ->orderBy('name')
      ->paginate(10);

    return response()->json($data);
  }

  public function show($id)
  {
    $data = Pma::with(['hht.repairs', 'hhp.repairs', 'district', 'repairs.repairable'])->findOrFail($id);
    return response()->json(['data' => $data]);
  }

  public function create()
  {
    return response()->json([
      'name'        => '',
      'pma_id'      => '',
      'pma_code'    => '',
      'district'    => '',
      'hht'         => '',
      'hhp'         => '',
    ]);
  }

  public function store(Request $request)
  {
    $this->validate($request, Pma::rules());

    $data = [
      'name'        => $request->name,
      'pma_id'      => $request->pma_id,
      'pma_code'    => $request->pma_code,
      'district_id' => $request->district['value'],
    ];

    $newData = Pma::create($data);

    return response()->json($newData);
  }

  public function edit($id)
  {
    $data = Pma::with(['district'])->findOrFail($id);

    $data = [
      'id'       => $data->id,
      'name'     => $data->name,
      'pma_id'   => $data->pma_id,
      'pma_code' => $data->pma_code,
      'district' => ['value' => $data->district_id, 'label' => $data->district->name],
    ];

    return response()->json($data);
  }

  public function update(Request $request, $id)
  {
    $this->validate($request, Pma::rules());

    $data = Pma::findOrFail($id);

    $req = [
      'name'        => $request->name,
      'pma_id'      => $request->pma_id,
      'pma_code'    => $request->pma_code,
      'district_id' => $request->district['value'],
    ];

    // $data->update($req);

    return response()->json(['message' => 'Data updated succesfully!']);
  }

  public function destroy($id)
  {
    $data = Pma::findOrFail($id);
    $data->delete();

    return response()->json(['message' => 'Data deleted succesfully!']);
  }
}
