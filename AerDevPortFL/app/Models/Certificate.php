<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Certificate extends Model
{
    protected $fillable = [
        'title',
        'issuer',
        'category',
        'issue_date',
        'expiration_date',
        'credential_id',
        'credential_url',
        'image',
        'description',
        'is_featured',
        'sort_order',
        'status',
    ];
    protected $casts = [
        'issue_date' => 'date:Y-m-d',
        'expiration_date' => 'date:Y-m-d',
        'is_featured' => 'boolean',
        'sort_order' => 'integer',
    ];
}
