<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $fillable = [
        'title',
        'organization',
        'category',
        'location',
        'start_date',
        'end_date',
        'is_current',
        'description',
        'highlights',
        'technologies',
        'organization_url',
        'logo',
        'sort_order',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'start_date' => 'date',
            'end_date' => 'date',
            'is_current' => 'boolean',
            'highlights' => 'array',
            'technologies' => 'array',
            'sort_order' => 'integer',
            'status' => 'boolean',
        ];
    }
}