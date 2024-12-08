import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNotebooksInstanceArgsAcceleratorConfig {
  core_count: number;
  type: string;
}

export interface GoogleNotebooksInstanceArgsContainerImage {
  repository: string;
  tag?: string;
}

export interface GoogleNotebooksInstanceArgsReservationAffinity {
  consume_reservation_type: string;
  key?: string;
  values?: string[];
}

export interface GoogleNotebooksInstanceArgsShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}

export interface GoogleNotebooksInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNotebooksInstanceArgsVmImage {
  image_family?: string;
  image_name?: string;
  project: string;
}

export interface GoogleNotebooksInstanceArgs {
  boot_disk_size_gb?: number;
  boot_disk_type?: string;
  custom_gpu_driver_path?: string;
  data_disk_size_gb?: number;
  data_disk_type?: string;
  desired_state?: string;
  install_gpu_driver?: boolean;
  instance_owners?: string[];
  kms_key?: string;
  labels?: { [key: string]: string };
  location: string;
  machine_type: string;
  metadata?: { [key: string]: string };
  name: string;
  nic_type?: string;
  no_proxy_access?: boolean;
  no_public_ip?: boolean;
  no_remove_data_disk?: boolean;
  post_startup_script?: string;
  accelerator_config?: GoogleNotebooksInstanceArgsAcceleratorConfig;
  container_image?: GoogleNotebooksInstanceArgsContainerImage;
  reservation_affinity?: GoogleNotebooksInstanceArgsReservationAffinity;
  shielded_instance_config?: GoogleNotebooksInstanceArgsShieldedInstanceConfig;
  timeouts?: GoogleNotebooksInstanceArgsTimeouts;
  vm_image?: GoogleNotebooksInstanceArgsVmImage;
}

export class google_notebooks_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNotebooksInstanceArgs) {
    const meta = {accelerator_config:{isBlock:true},container_image:{isBlock:true},reservation_affinity:{isBlock:true},shielded_instance_config:{isBlock:true},timeouts:{isBlock:true},vm_image:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_notebooks_instance", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get disk_encryption(): string {
    return `${this.resourceType}.${this.resourceName}.disk_encryption`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get machine_type(): string {
    return `${this.resourceType}.${this.resourceName}.machine_type`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get network(): string {
    return `${this.resourceType}.${this.resourceName}.network`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get proxy_uri(): string {
    return `${this.resourceType}.${this.resourceName}.proxy_uri`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }

  get service_account_scopes(): string {
    return `${this.resourceType}.${this.resourceName}.service_account_scopes`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get subnet(): string {
    return `${this.resourceType}.${this.resourceName}.subnet`;
  }

  get tags(): string {
    return `${this.resourceType}.${this.resourceName}.tags`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
