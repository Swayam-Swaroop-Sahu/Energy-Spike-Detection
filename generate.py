import os
import shutil
import calendar

base_dir = "/Users/saxu/PycharmProjects/packrunner/Energy Project"

source_month = "January"
script_sources = {
    "2 Bedroom Data": os.path.join(base_dir, source_month, "2 Bedroom Data - Jan", "2bedJan.py"),
    "4 Bedroom Data": os.path.join(base_dir, source_month, "4 Bedroom Data - Jan", "4bedJan.py"),
    "6 Bedroom Data": os.path.join(base_dir, source_month, "6 Bedroom Data - Jan", "6bedJan.py"),
}


for month_num in range(2, 13):
    month_name = calendar.month_name[month_num]
    month_abbr = calendar.month_abbr[month_num]

    month_dir = os.path.join(base_dir, month_name)
    os.makedirs(month_dir, exist_ok=True)

    subdirs = [
        f"2 Bedroom Data - {month_abbr}",
        f"4 Bedroom Data - {month_abbr}",
        f"6 Bedroom Data - {month_abbr}"
    ]

    scripts = {
        "2 Bedroom Data": f"2bed{month_abbr}.py",
        "4 Bedroom Data": f"4bed{month_abbr}.py",
        "6 Bedroom Data": f"6bed{month_abbr}.py"
    }

    for subdir in subdirs:
        subdir_path = os.path.join(month_dir, subdir)
        os.makedirs(subdir_path, exist_ok=True)

        key = subdir.split(' - ')[0]

        if key in script_sources:
            script_source = script_sources[key]
            script_dest = os.path.join(subdir_path, scripts[key])
            if os.path.exists(script_source):
                shutil.copy(script_source, script_dest)
                print(f"Copied {script_source} to {script_dest}")
            else:
                print(f"Script {script_source} not found!")

print("Folder structure for all 12 months created successfully.")
