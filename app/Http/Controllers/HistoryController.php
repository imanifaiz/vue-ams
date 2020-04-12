<?php

namespace App\Http\Controllers;

use App\History;
use Illuminate\Http\Request;

class HistoryController extends Controller
{
  public function index()
  {
    $data = History::with(['device', 'pma'])->orderBy('created_at')->paginate(15);
    return response()->json($data);
  }

  public function show($id)
  {
    $data = History::findOrFail($id);
    return response()->json(['data' => $data]);
  }

  public function create()
  {
    return response()->json(['form' => ['device_id' => '', 'pma_id' => '']]);
  }

  public function store(Request $request)
  {
    $data = History::create($request->all());
    return response()->json(['data' => $data]);
  }

  public function edit($id)
  {
    $data = History::findOrFail($id);
    return response()->json(['form' => ['device_id' => $data->device_id, 'pma_id' => $data->pma_id]]);
  }

  public function update(Request $request, $id)
  {
    $data = History::findOrFail($id)->update($request->all());
    return response()->json(['message' => 'Data updated succesfully!']);
  }

  public function destroy($id)
  {
    $data = History::findOrFail($id);
    $data->delete();
    return response()->json(['message' => 'Data deleted succesfully!']);
  }
}
