<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('organization');
            $table->enum('category', [
                'Work',
                'Internship',
                'Education',
                'Project'
            ]);

            $table->string('location')->nullable();

            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->boolean('is_current')->default(false);

            $table->text('description')->nullable();
            $table->json('highlights')->nullable();
            $table->json('technologies')->nullable();

            $table->string('organization_url')->nullable();
            $table->string('logo')->nullable();

            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('status')->default(true);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};