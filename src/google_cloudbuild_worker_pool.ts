import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudbuildWorkerPoolArgsNetworkConfig {
  peered_network: string;
  peered_network_ip_range?: string;
}

export interface GoogleCloudbuildWorkerPoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudbuildWorkerPoolArgsWorkerConfig {
  disk_size_gb?: number;
  machine_type?: string;
}

export interface GoogleCloudbuildWorkerPoolArgs {
  annotations?: { [key: string]: string };
  display_name?: string;
  location: string;
  name: string;
  network_config?: GoogleCloudbuildWorkerPoolArgsNetworkConfig;
  timeouts?: GoogleCloudbuildWorkerPoolArgsTimeouts;
  worker_config?: GoogleCloudbuildWorkerPoolArgsWorkerConfig;
}

export class google_cloudbuild_worker_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudbuildWorkerPoolArgs) {
    const meta = {network_config:{isBlock:true},timeouts:{isBlock:true},worker_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudbuild_worker_pool", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
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

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
