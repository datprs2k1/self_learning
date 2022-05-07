<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Hash;
use Illuminate\Support\Facades\Hash as FacadesHash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $role1 = Role::create(['name' => 'admin']);

        $role2 = Role::create(['name' => 'teacher']);

        $role3 = Role::create(['name' => 'student']);
        // gets all permissions via Gate::before rule; see AuthServiceProvider

        // create demo users
        $user = \App\Models\User::factory()->create([
            'name' => 'Quản trị viên',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('12345678')
        ]);
        $user->assignRole($role1);

        $user = \App\Models\User::factory()->create([
            'name' => 'Giảng viên',
            'email' => 'teacher@gmail.com',
            'password' => Hash::make('12345678')
        ]);
        $user->assignRole($role2);

        $user = \App\Models\User::factory()->create([
            'name' => 'Sinh viên',
            'email' => 'student@gmail.com',
            'password' => Hash::make('12345678')
        ]);
        $user->assignRole($role3);
    }
}
