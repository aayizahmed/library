# 📚 School Library Book Registration System

A full-stack, highly polished **School Library Book Registration System** built with **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, **Lucide React**, and **Supabase (Postgres Database, Auth, RLS Policies, and Automated DB Triggers)**.

---

## 🌟 Key Features

### 1. Main/Public Interface (Students & Faculty)
- **Searchable Catalog**: Real-time searching across title, author, ISBN, category, shelf location, and registration number.
- **Dynamic Category & Availability Filters**: Filter by Fiction, Science, Technology, History, Reference, or availability status.
- **Book Cards**: Micro-interactions with status badges (`available` green, `checked_out` amber, `lost/damaged` red, `retired` gray) and custom category gradient artwork.
- **Book Detail Modal**: Inspect full metadata, copy breakdown, and shelf placement.
- **Responsive Layout**: Fluid design reflowing from 4 columns on desktop to 1 on mobile.

### 2. Admin Authentication (`/admin/login`)
- **Supabase Auth Integration**: Gated admin access with email/password (`supabase.auth.signInWithPassword`).
- **Profile Role Enforcement**: Checks user role (`admin` or `librarian`) via Supabase RLS and custom profiles table.
- **1-Click Demo Login**: Built-in fallback for instant offline/demo testing.

### 3. Admin Dashboard (`/admin/dashboard`)
- **Overview Tab**: Live statistics cards (Total Acquisitions, Available Copies, Checked Out, Lost/Damaged, Recently Registered) with trend indicators.
- **Manage Books Tab**: Interactive inventory table with sorting, pagination, and quick actions (edit metadata, check in/out toggle, retire book).
- **Register New Book Modal**: Form with live preview of auto-generated registration number (`LIB-2026-XXXXXX`).
- **Backlog / Activity Log Tab**: Chronological audit table recording every registration, status update, and metadata change with JSON payload snapshot inspection.

---

## 🛠 Tech Stack

- **Frontend Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS, Custom Glassmorphism, CSS Animations
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Backend & Database**: Supabase Cloud (Postgres, Auth, Row Level Security, Automated Database Triggers & Sequences)

---

## 🚀 Quick Start & Local Setup

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Running Locally
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the **Public Catalog**.
Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login) for the **Admin Portal**.

---

## ⚡ Connecting to a Live Supabase Instance

To connect this application to your own Supabase Cloud database:

### Step 1: Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a free project.
2. In your Supabase Dashboard, navigate to **Project Settings -> API**.
3. Copy your **Project URL** and **anon / public** key.

### Step 2: Configure Environment Variables
Create a `.env.local` file in the project root (or copy `.env.example`):
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

### Step 3: Run SQL Migrations
1. In your Supabase Dashboard, open the **SQL Editor**.
2. Copy and paste the contents of `supabase/migrations/20260727000000_schema_and_triggers.sql` into the SQL Editor and click **Run**.
   - This creates the `profiles`, `books`, and `registration_log` tables.
   - It sets up the `book_reg_seq` sequence for auto-generating registration numbers (`LIB-YYYY-XXXXXX`).
   - It attaches the database trigger that automatically logs activity into `registration_log` whenever a book is inserted or updated.
   - It enables **Row Level Security (RLS)** policies.
3. (Optional) Run `supabase/seed.sql` to populate sample books and activity history.

---

## 🗄 Database Schema Summary

### `books`
- `id` (uuid, PK)
- `registration_number` (text, unique, auto-generated e.g. `LIB-2026-000101`)
- `title` (text, not null)
- `author` (text, not null)
- `isbn` (text)
- `category` (text)
- `publisher` (text)
- `edition` (text)
- `total_copies` (int, default 1)
- `available_copies` (int, default 1)
- `status` (text: `available`, `checked_out`, `lost`, `damaged`, `retired`)
- `shelf_location` (text)
- `added_by` (uuid, FK -> `auth.users`)
- `created_at` / `updated_at` (timestamptz)

### `registration_log`
- `id` (uuid, PK)
- `book_id` (uuid, FK -> `books.id`)
- `action` (text: `registered`, `updated`, `status_changed`, `retired`)
- `details` (jsonb snapshot)
- `performed_by` (uuid, FK -> `auth.users`)
- `created_at` (timestamptz)

### `profiles`
- `id` (uuid, PK -> `auth.users.id`)
- `full_name` (text)
- `role` (text: `admin` | `librarian`)
