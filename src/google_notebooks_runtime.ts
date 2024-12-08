import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNotebooksRuntimeArgsAccessConfig {
  access_type?: string;
  runtime_owner?: string;
}

export interface GoogleNotebooksRuntimeArgsSoftwareConfigKernels {
  repository: string;
  tag?: string;
}

export interface GoogleNotebooksRuntimeArgsSoftwareConfig {
  custom_gpu_driver_path?: string;
  enable_health_monitoring?: boolean;
  idle_shutdown?: boolean;
  idle_shutdown_timeout?: number;
  install_gpu_driver?: boolean;
  notebook_upgrade_schedule?: string;
  post_startup_script?: string;
  post_startup_script_behavior?: string;
  kernels?: GoogleNotebooksRuntimeArgsSoftwareConfigKernels[];
}

export interface GoogleNotebooksRuntimeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigAcceleratorConfig {
  core_count?: number;
  type?: string;
}

export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigContainerImages {
  repository: string;
  tag?: string;
}

export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigDataDiskInitializeParams {
  description?: string;
  disk_name?: string;
  disk_size_gb?: number;
  disk_type?: string;
}

export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigDataDisk {
  interface?: string;
  mode?: string;
  source?: string;
  type?: string;
  initialize_params?: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigDataDiskInitializeParams;
}

export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigEncryptionConfig {
  kms_key?: string;
}

export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}

export interface GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfig {
  internal_ip_only?: boolean;
  machine_type: string;
  network?: string;
  nic_type?: string;
  reserved_ip_range?: string;
  subnet?: string;
  accelerator_config?: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigAcceleratorConfig;
  container_images?: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigContainerImages[];
  data_disk: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigDataDisk;
  encryption_config?: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigEncryptionConfig;
  shielded_instance_config?: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfigShieldedInstanceConfig;
}

export interface GoogleNotebooksRuntimeArgsVirtualMachine {
  virtual_machine_config?: GoogleNotebooksRuntimeArgsVirtualMachineVirtualMachineConfig;
}

export interface GoogleNotebooksRuntimeArgs {
  labels?: { [key: string]: string };
  location: string;
  name: string;
  access_config?: GoogleNotebooksRuntimeArgsAccessConfig;
  software_config?: GoogleNotebooksRuntimeArgsSoftwareConfig;
  timeouts?: GoogleNotebooksRuntimeArgsTimeouts;
  virtual_machine?: GoogleNotebooksRuntimeArgsVirtualMachine;
}

export class google_notebooks_runtime extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNotebooksRuntimeArgs) {
    const meta = {access_config:{isBlock:true},software_config:{isBlock:true,kernels:{isBlock:true}},timeouts:{isBlock:true},virtual_machine:{isBlock:true,virtual_machine_config:{isBlock:true,accelerator_config:{isBlock:true},container_images:{isBlock:true},data_disk:{isBlock:true,initialize_params:{isBlock:true}},encryption_config:{isBlock:true},shielded_instance_config:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "google_notebooks_runtime", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
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

  get metrics(): string {
    return `${this.resourceType}.${this.resourceName}.metrics`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
