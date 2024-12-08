import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleWorkbenchInstanceArgsGceSetupAcceleratorConfigs {
  core_count?: string;
  type?: string;
}

export interface GoogleWorkbenchInstanceArgsGceSetupBootDisk {
  kms_key?: string;
}

export interface GoogleWorkbenchInstanceArgsGceSetupContainerImage {
  repository: string;
  tag?: string;
}

export interface GoogleWorkbenchInstanceArgsGceSetupDataDisks {
  disk_type?: string;
  kms_key?: string;
}

export interface GoogleWorkbenchInstanceArgsGceSetupNetworkInterfacesAccessConfigs {
  external_ip: string;
}

export interface GoogleWorkbenchInstanceArgsGceSetupNetworkInterfaces {
  nic_type?: string;
  access_configs?: GoogleWorkbenchInstanceArgsGceSetupNetworkInterfacesAccessConfigs[];
}

export interface GoogleWorkbenchInstanceArgsGceSetupServiceAccounts {
}

export interface GoogleWorkbenchInstanceArgsGceSetupShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}

export interface GoogleWorkbenchInstanceArgsGceSetupVmImage {
  family?: string;
  name?: string;
  project?: string;
}

export interface GoogleWorkbenchInstanceArgsGceSetup {
  enable_ip_forwarding?: boolean;
  accelerator_configs?: GoogleWorkbenchInstanceArgsGceSetupAcceleratorConfigs[];
  boot_disk?: GoogleWorkbenchInstanceArgsGceSetupBootDisk;
  container_image?: GoogleWorkbenchInstanceArgsGceSetupContainerImage;
  data_disks?: GoogleWorkbenchInstanceArgsGceSetupDataDisks;
  network_interfaces?: GoogleWorkbenchInstanceArgsGceSetupNetworkInterfaces[];
  service_accounts?: GoogleWorkbenchInstanceArgsGceSetupServiceAccounts[];
  shielded_instance_config?: GoogleWorkbenchInstanceArgsGceSetupShieldedInstanceConfig;
  vm_image?: GoogleWorkbenchInstanceArgsGceSetupVmImage;
}

export interface GoogleWorkbenchInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleWorkbenchInstanceArgs {
  desired_state?: string;
  disable_proxy_access?: boolean;
  instance_id?: string;
  instance_owners?: string[];
  labels?: { [key: string]: string };
  location: string;
  name: string;
  gce_setup?: GoogleWorkbenchInstanceArgsGceSetup;
  timeouts?: GoogleWorkbenchInstanceArgsTimeouts;
}

export class google_workbench_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleWorkbenchInstanceArgs) {
    const meta = {gce_setup:{isBlock:true,accelerator_configs:{isBlock:true},boot_disk:{isBlock:true},container_image:{isBlock:true},data_disks:{isBlock:true},network_interfaces:{isBlock:true,access_configs:{isBlock:true}},service_accounts:{isBlock:true},shielded_instance_config:{isBlock:true},vm_image:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_workbench_instance", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get creator(): string {
    return `${this.resourceType}.${this.resourceName}.creator`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get health_info(): string {
    return `${this.resourceType}.${this.resourceName}.health_info`;
  }

  get health_state(): string {
    return `${this.resourceType}.${this.resourceName}.health_state`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get proxy_uri(): string {
    return `${this.resourceType}.${this.resourceName}.proxy_uri`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get upgrade_history(): string {
    return `${this.resourceType}.${this.resourceName}.upgrade_history`;
  }
}
