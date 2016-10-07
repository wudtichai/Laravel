<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'fullname_th', 'email',
    ];

    public function knowledge()
    {
        return $this->hasOne('App\Knowledge');
    }

    public function nature()
    {
        return $this->hasOne('App\Nature');
    }

    public function test()
    {
        return $this->hasOne('App\Test');
    }
}
