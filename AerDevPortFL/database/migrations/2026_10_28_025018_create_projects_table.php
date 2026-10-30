
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category')->nullable();
            $table->text('description');
            $table->text('long_description')->nullable();
            $table->json('technologies')->nullable();
            $table->json('features')->nullable();
            $table->string('image')->nullable();
            $table->json('screenshots')->nullable();
            $table->string('github_url')->nullable();
            $table->string('demo_url')->nullable();
            $table->unsignedSmallInteger('year')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
