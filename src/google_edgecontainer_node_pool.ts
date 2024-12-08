import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEdgecontainerNodePoolArgsLocalDiskEncryption {
  kms_key?: string;
}

export interface GoogleEdgecontainerNodePoolArgsNodeConfig {
}

export interface GoogleEdgecontainerNodePoolArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEdgecontainerNodePoolArgs {
  cluster: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  node_count: number;
  node_location: string;
  local_disk_encryption?: GoogleEdgecontainerNodePoolArgsLocalDiskEncryption;
  node_config?: GoogleEdgecontainerNodePoolArgsNodeConfig;
  timeouts?: GoogleEdgecontainerNodePoolArgsTimeouts;
}

export class google_edgecontainer_node_pool extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleEdgecontainerNodePoolArgs) {
    const meta = {local_disk_encryption:{isBlock:true},node_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_edgecontainer_node_pool", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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

  get machine_filter(): string {
    return `${this.resourceType}.${this.resourceName}.machine_filter`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get node_count(): string {
    return `${this.resourceType}.${this.resourceName}.node_count`;
  }

  get node_location(): string {
    return `${this.resourceType}.${this.resourceName}.node_location`;
  }

  get node_version(): string {
    return `${this.resourceType}.${this.resourceName}.node_version`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
