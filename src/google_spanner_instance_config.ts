import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSpannerInstanceConfigArgsReplicas {
  default_leader_location?: boolean;
  location?: string;
  type?: string;
}

export interface GoogleSpannerInstanceConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSpannerInstanceConfigArgs {
  display_name: string;
  labels?: { [key: string]: string };
  replicas: GoogleSpannerInstanceConfigArgsReplicas[];
  timeouts?: GoogleSpannerInstanceConfigArgsTimeouts;
}

export class google_spanner_instance_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSpannerInstanceConfigArgs) {
    const meta = {replicas:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_spanner_instance_config", resourceName);
  }

  get base_config(): string {
    return `${this.resourceType}.${this.resourceName}.base_config`;
  }

  get config_type(): string {
    return `${this.resourceType}.${this.resourceName}.config_type`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
