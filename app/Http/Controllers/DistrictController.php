<?php

namespace App\Http\Controllers;

use App\District;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
  public function index()
  {
    $data = District::orderBy('name')->select('id', 'name')->paginate(15);
    return response()->json($data);
  }

  public function show($id)
  {
    $data = District::findOrFail($id);
    return response()->json(['data' => $data]);
  }

  public function create()
  {
    return response()->json(['form' => ['name' => '']]);
  }

  public function store(Request $request)
  {
    $this->validate($request, [
      'name' => 'required'
    ]);

    
    $data = District::create($request->all());
    return response()->json(['data' => $data]);
  }

  public function edit($id)
  {
    $data = District::findOrFail($id);
    return response()->json(['form' => ['name' => $data->name]]);
  }

  public function update(Request $request, $id)
  {
    $this->validate($request, [
      'name' => 'required'
    ]);

    $data = District::findOrFail($id)->update($request->all());
    return response()->json(['message' => 'Data updated succesfully!']);
  }

  public function destroy($id)
  {
    $data = District::findOrFail($id);
    $data->delete();
    return response()->json(['message' => 'Data deleted succesfully!']);
  }
}
