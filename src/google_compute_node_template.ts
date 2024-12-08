import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeNodeTemplateArgsAccelerators {
  accelerator_count?: number;
  accelerator_type?: string;
}

export interface GoogleComputeNodeTemplateArgsDisks {
  disk_count?: number;
  disk_size_gb?: number;
  disk_type?: string;
}

export interface GoogleComputeNodeTemplateArgsNodeTypeFlexibility {
  cpus?: string;
  memory?: string;
}

export interface GoogleComputeNodeTemplateArgsServerBinding {
  type: string;
}

export interface GoogleComputeNodeTemplateArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeNodeTemplateArgs {
  cpu_overcommit_type?: string;
  description?: string;
  name?: string;
  node_affinity_labels?: { [key: string]: string };
  node_type?: string;
  accelerators?: GoogleComputeNodeTemplateArgsAccelerators[];
  disks?: GoogleComputeNodeTemplateArgsDisks[];
  node_type_flexibility?: GoogleComputeNodeTemplateArgsNodeTypeFlexibility;
  server_binding?: GoogleComputeNodeTemplateArgsServerBinding;
  timeouts?: GoogleComputeNodeTemplateArgsTimeouts;
}

export class google_compute_node_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeNodeTemplateArgs) {
    const meta = {accelerators:{isBlock:true},disks:{isBlock:true},node_type_flexibility:{isBlock:true},server_binding:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_node_template", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }
}
