<?php

use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\Schema;

use Faker\Factory;
use App\District;
use App\Pma;
use App\Hhp;
use App\Hht;
use App\Repair;
use App\History;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();

        // truncate all tables
        Schema::disableForeignKeyConstraints();

        Repair::truncate();
        History::truncate();
        Hht::truncate();
        Hhp::truncate();
        Pma::truncate();
        District::truncate();
        
        // seed table district
        foreach (range(1, 12) as $i) {
            $district = District::create(['name' => strtoupper($faker->state)]);

            foreach (range(1, rand(5, 8)) as $p) {
                // seed table pma
                $pma = Pma::create([
                    'name'        => strtoupper($faker->name),
                    'pma_code'    => strtoupper($faker->stateAbbr),
                    'pma_id'      => strtoupper($faker->stateAbbr . $faker->buildingNumber),
                    'district_id' => $district->id
                ]);
            }
        }

        foreach (Pma::all() as $p) {
            // seed table hht
            $hht = Hht::create([
                'serial_no' => $faker->swiftBicNumber,
                'pma_id'    => $p->id
            ]);

            // seed table hhp
            $hhp = Hhp::create([
                'serial_no' => $faker->swiftBicNumber,
                'pma_id'    => $p->id
            ]);

            // seed table histories
            foreach (range(1, rand(1,3)) as $h) {
                $id = rand(1, Pma::count());

                if ($id != $p->id) {
                    $hht->histories()->attach([$id]);

                    $hhp->histories()->attach([$id]);
                }
            };

            // seed table repairs
            $reasons = [
                'SCREEN PROBLEM',
                'BOARD PROBLEM',
                'BATTERY PROBLEM',
                'WIFI PROBLEM',
                'CHARGER PROBLEM'
            ];

            $statuses = [
                'SEND TO VENDOR',
                'RETURNED TO PMA',
            ];
        }

        foreach (Hht::all() as $hht) {
            foreach (range(1, rand(1, 3)) as $h) {
                if ($h != $p->id) {
                    $hht->repairs()->create([
                        'pma_id'      => $p->id,
                        'reported_at' => $faker->date(),
                        'repaired_at' => $faker->date(),
                        'returned_at' => $faker->date(),
                        'reason'      => $reasons[$h-1],
                        'status'      => $statuses[rand(0, 1)],
                        'remarks'     => strtoupper($faker->text)
                    ]);
                }
            }
        }

        foreach (Hhp::all() as $hhp) {
            foreach (range(1, rand(1, 3)) as $h) {
                if ($h != $p->id) {
                    $hhp->repairs()->create([
                        'pma_id'      => $p->id,
                        'reported_at' => $faker->date(),
                        'repaired_at' => $faker->date(),
                        'returned_at' => $faker->date(),
                        'reason'      => $reasons[$h-1],
                        'status'      => $statuses[rand(0, 1)],
                        'remarks'     => strtoupper($faker->text)
                    ]);
                }
            };
        }
    }
}
