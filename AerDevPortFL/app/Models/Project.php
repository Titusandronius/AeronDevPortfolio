<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Project extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'category',
        'description',
        'long_description',
        'technologies',
        'features',
        'image',
        'screenshots',
        'github_url',
        'demo_url',
        'year',
        'is_featured',
        'sort_order',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'technologies' => 'array',
            'features' => 'array',
            'screenshots' => 'array',
            'year' => 'integer',
            'is_featured' => 'boolean',
            'sort_order' => 'integer',
            'status' => 'boolean',
        ];
    }
}
