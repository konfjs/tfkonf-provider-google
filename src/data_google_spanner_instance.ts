import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleSpannerInstanceArgs {
  config?: string;
  display_name?: string;
  name: string;
  project?: string;
}

export class data_google_spanner_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleSpannerInstanceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_spanner_instance", resourceName);
  }

  get autoscaling_config(): string {
    return `data.${this.resourceType}.${this.resourceName}.autoscaling_config`;
  }

  get default_backup_schedule_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.default_backup_schedule_type`;
  }

  get edition(): string {
    return `data.${this.resourceType}.${this.resourceName}.edition`;
  }

  get effective_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get force_destroy(): string {
    return `data.${this.resourceType}.${this.resourceName}.force_destroy`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.labels`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get num_nodes(): string {
    return `data.${this.resourceType}.${this.resourceName}.num_nodes`;
  }

  get processing_units(): string {
    return `data.${this.resourceType}.${this.resourceName}.processing_units`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `data.${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
