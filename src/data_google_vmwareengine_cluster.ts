import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareengineClusterArgs {
  name: string;
  parent: string;
}

export class data_google_vmwareengine_cluster extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleVmwareengineClusterArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_cluster", resourceName);
  }

  get autoscaling_settings(): string {
    return `data.${this.resourceType}.${this.resourceName}.autoscaling_settings`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get management(): string {
    return `data.${this.resourceType}.${this.resourceName}.management`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get node_type_configs(): string {
    return `data.${this.resourceType}.${this.resourceName}.node_type_configs`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get state(): string {
    return `data.${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `data.${this.resourceType}.${this.resourceName}.uid`;
  }
}
