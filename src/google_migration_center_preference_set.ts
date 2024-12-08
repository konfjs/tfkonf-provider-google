import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleMigrationCenterPreferenceSetArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries {
  code?: string;
}

export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences {
  allowed_machine_series?: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries[];
}

export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferences {
  license_type?: string;
  machine_preferences?: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;
}

export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesRegionPreferences {
  preferred_regions?: string[];
}

export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes {
  node_name?: string;
}

export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesSoleTenancyPreferences {
  commitment_plan?: string;
  cpu_overcommit_ratio?: number;
  host_maintenance_policy?: string;
  node_types?: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes[];
}

export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesVmwareEnginePreferences {
  commitment_plan?: string;
  cpu_overcommit_ratio?: number;
  memory_overcommit_ratio?: number;
  storage_deduplication_compression_ratio?: number;
}

export interface GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferences {
  commitment_plan?: string;
  sizing_optimization_strategy?: string;
  target_product?: string;
  compute_engine_preferences?: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesComputeEnginePreferences;
  region_preferences?: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesRegionPreferences;
  sole_tenancy_preferences?: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesSoleTenancyPreferences;
  vmware_engine_preferences?: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferencesVmwareEnginePreferences;
}

export interface GoogleMigrationCenterPreferenceSetArgs {
  description?: string;
  display_name?: string;
  location: string;
  preference_set_id: string;
  timeouts?: GoogleMigrationCenterPreferenceSetArgsTimeouts;
  virtual_machine_preferences?: GoogleMigrationCenterPreferenceSetArgsVirtualMachinePreferences;
}

export class google_migration_center_preference_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleMigrationCenterPreferenceSetArgs) {
    const meta = {timeouts:{isBlock:true},virtual_machine_preferences:{isBlock:true,compute_engine_preferences:{isBlock:true,machine_preferences:{isBlock:true,allowed_machine_series:{isBlock:true}}},region_preferences:{isBlock:true},sole_tenancy_preferences:{isBlock:true,node_types:{isBlock:true}},vmware_engine_preferences:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "google_migration_center_preference_set", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get preference_set_id(): string {
    return `${this.resourceType}.${this.resourceName}.preference_set_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
