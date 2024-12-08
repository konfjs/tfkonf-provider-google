import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigCategoricalThresholdConfig {
  value: number;
}

export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigImportFeaturesAnalysis {
  anomaly_detection_baseline?: string;
  state?: string;
}

export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigNumericalThresholdConfig {
  value: number;
}

export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigSnapshotAnalysis {
  disabled?: boolean;
  monitoring_interval_days?: number;
  staleness_days?: number;
}

export interface GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfig {
  categorical_threshold_config?: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigCategoricalThresholdConfig;
  import_features_analysis?: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigImportFeaturesAnalysis;
  numerical_threshold_config?: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigNumericalThresholdConfig;
  snapshot_analysis?: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfigSnapshotAnalysis;
}

export interface GoogleVertexAiFeaturestoreEntitytypeArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiFeaturestoreEntitytypeArgs {
  description?: string;
  featurestore: string;
  labels?: { [key: string]: string };
  name?: string;
  monitoring_config?: GoogleVertexAiFeaturestoreEntitytypeArgsMonitoringConfig;
  timeouts?: GoogleVertexAiFeaturestoreEntitytypeArgsTimeouts;
}

export class google_vertex_ai_featurestore_entitytype extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleVertexAiFeaturestoreEntitytypeArgs) {
    const meta = {monitoring_config:{isBlock:true,categorical_threshold_config:{isBlock:true},import_features_analysis:{isBlock:true},numerical_threshold_config:{isBlock:true},snapshot_analysis:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_featurestore_entitytype", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get featurestore(): string {
    return `${this.resourceType}.${this.resourceName}.featurestore`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
